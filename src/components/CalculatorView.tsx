"use client";

import { useMemo, useState } from "react";
import { FIELDS, runCalc, type CalcDef, type CalcResult, type FieldDef } from "@/lib/calcs";
import { numberToIndianWords } from "@/lib/utils";

export default function CalculatorView({ calc }: { calc: CalcDef }) {
  const fields = FIELDS[calc.id];
  const initial = useMemo<Record<string, number | string>>(() => {
    const o: Record<string, number | string> = {};
    for (const f of fields) o[f.id] = f.defaultValue;
    return o;
  }, [fields]);

  const [values, setValues] = useState<Record<string, number | string>>(initial);
  const result = useMemo(() => runCalc(calc.id, values), [calc.id, values]);
  const update = (id: string, v: number | string) => setValues((s) => ({ ...s, [id]: v }));

  return (
    <div className="bg-white rounded-[20px] border border-border overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 px-7 pt-6 pb-4 border-b border-border">
        <div className="text-[1.75rem]">{calc.icon}</div>
        <div>
          <div className="font-serif text-[1.2rem] font-bold text-navy">{calc.name}</div>
          <div className="text-xs text-gray mt-0.5">{calc.desc}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_340px] gap-8 p-7 items-start">
        <div className="space-y-5">
          {fields.map((f) => <Field key={f.id} field={f} value={values[f.id]} onChange={(v) => update(f.id, v)} />)}
        </div>
        <ResultPanel result={result} />
      </div>

      <div className="bg-cream border-t border-border px-7 py-4 text-[11px] text-gray leading-[1.7]">
        ⚠️ <strong>Disclaimer:</strong> Results are for illustration only. Mutual Fund investments subject to market risks. Assumed returns may not reflect actual performance. Read all scheme-related documents carefully. Not investment advice.
      </div>
    </div>
  );
}

function Field({ field, value, onChange }: { field: FieldDef; value: number | string; onChange: (v: number | string) => void }) {
  if (field.type === "slider" && field.prefix === "₹") {
    const numValue = Number(value) || 0;
    return (
      <div>
        <div className="text-[12.5px] font-medium text-navy mb-2">{field.label}</div>
        <div className="relative group">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-teal font-serif font-bold text-[15px] pointer-events-none">₹</span>
          <input
            type="text"
            inputMode="numeric"
            value={numValue ? numValue.toLocaleString("en-IN") : ""}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/[^0-9]/g, "");
              onChange(cleaned ? Number(cleaned) : 0);
            }}
            placeholder="Enter amount"
            className="w-full pl-8 pr-3.5 py-3 border-[1.5px] border-border focus:border-teal rounded-[10px] text-[15px] font-semibold text-navy outline-none transition-colors bg-white"
          />
        </div>
        {numValue > 0 && (
          <div className="mt-2 flex items-center gap-1.5 text-[11.5px] text-teal font-medium">
            <span className="inline-block w-1 h-1 rounded-full bg-teal" />
            <span className="capitalize">{numberToIndianWords(numValue).toLowerCase()}</span>
            <span className="text-gray font-normal">rupees</span>
          </div>
        )}
      </div>
    );
  }

  if (field.type === "slider") {
    const unit = field.unit ?? "";
    const suffixLabel =
      unit === "%" ? "%" :
      unit === "yrs" ? "Years" :
      unit === "mo" ? "Months" :
      unit;
    const numValue = value === "" || value === null || value === undefined ? "" : String(value);
    const max = field.max != null ? Number(field.max) : Infinity;
    const min = field.min != null ? Number(field.min) : 0;
    const current = Number(value) || 0;
    const overMax = field.max != null && current > max;
    const underMin = field.min != null && current > 0 && current < min;

    return (
      <div>
        <div className="text-[12.5px] font-medium text-navy mb-2">{field.label}</div>
        <div className="relative">
          <input
            type="number"
            min={field.min}
            max={field.max}
            step={field.step}
            value={numValue}
            onChange={(e) => {
              if (e.target.value === "") { onChange(0); return; }
              const n = Number(e.target.value);
              onChange(Math.min(n, max));
            }}
            onBlur={() => {
              if (current > 0 && current < min) onChange(min);
            }}
            placeholder="Enter value"
            className={`w-full pl-3.5 pr-20 py-3 border-[1.5px] rounded-[10px] text-[15px] font-semibold text-navy outline-none transition-colors bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${underMin ? "border-gold focus:border-gold" : "border-border focus:border-teal"}`}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-teal font-medium text-[12px] pointer-events-none bg-light px-2 py-0.5 rounded-md">
            {suffixLabel}
          </span>
        </div>
        {overMax && (
          <div className="mt-1.5 text-[10.5px] text-red">Max allowed: {max} {unit}</div>
        )}
      </div>
    );
  }

  if (field.type === "number") {
    return (
      <div>
        <div className="text-[12.5px] font-medium text-navy mb-2">{field.label}</div>
        <input
          type="number"
          placeholder={field.placeholder}
          value={value as number}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className="w-full px-3.5 py-2.5 border-[1.5px] border-border focus:border-teal rounded-lg text-[13px] text-navy outline-none transition-colors bg-white"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="text-[12.5px] font-medium text-navy mb-2">{field.label}</div>
      <div className="flex gap-1.5 flex-wrap">
        {field.options?.map((opt) => {
          const active = String(value) === String(opt.value);
          return (
            <button
              key={String(opt.value)}
              onClick={() => onChange(opt.value)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium border-[1.5px] transition-all ${
                active ? "bg-teal text-white border-teal" : "bg-white text-gray border-border hover:border-teal hover:text-teal"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultPanel({ result }: { result: CalcResult }) {
  if (result.kind === "donut") {
    const inv = result.invested ?? 0;
    const ret = result.returns ?? 0;
    const total = inv + ret;
    const circ = 314.16;
    const invOff = total > 0 ? circ - circ * (inv / total) : circ;
    const pct = total > 0 ? Math.round((ret / total) * 100) : 0;
    return (
      <div className="bg-navy rounded-2xl p-6 md:sticky md:top-[90px]">
        <div className="text-[10px] text-white/45 tracking-[1.2px] uppercase mb-1.5">{result.mainLbl}</div>
        <div className="font-serif text-[2rem] font-bold text-white leading-none mb-6 break-words">{result.mainVal}</div>

        {total > 0 && (
          <>
            <div className="w-[140px] h-[140px] relative mx-auto mb-4">
              <svg className="w-[140px] h-[140px] -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="20" />
                <circle
                  cx="50" cy="50" r="50" fill="none" stroke="#10b981" strokeWidth="20" strokeLinecap="round"
                  style={{ strokeDasharray: 314.16, strokeDashoffset: invOff, transition: "stroke-dashoffset .9s ease" }}
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-base font-semibold text-white leading-none">{pct}%</div>
                <div className="text-[9px] text-white/40 mt-0.5">returns</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center mb-5 flex-wrap">
              <div className="flex items-center gap-1.5 text-[11px] text-white/50"><span className="w-2 h-2 rounded-full bg-teal" />Invested</div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/50"><span className="w-2 h-2 rounded-full bg-gold" />Returns</div>
            </div>
          </>
        )}

        <div className="flex flex-col mb-5">
          {result.rows?.map((r, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-[11.5px] text-white/45">{r.l}</span>
              <span className={`text-[12.5px] font-medium ${r.g ? "text-teal" : r.gold ? "text-gold" : "text-white"}`}>{r.v}</span>
            </div>
          ))}
        </div>

        <a href="https://www.wealthy.in/partners/nithi58604" target="_blank" rel="noreferrer" className="block bg-teal hover:bg-teal-2 text-white text-center py-3 rounded-[9px] no-underline text-[13px] font-semibold transition-colors">{result.cta ?? "Start SIP now →"}</a>
        <p className="text-[9.5px] text-white/30 text-center mt-2.5 leading-[1.6]">For illustration only. MF returns not guaranteed. Market risks apply.</p>
      </div>
    );
  }

  return (
    <div className="bg-navy rounded-2xl p-6 md:sticky md:top-[90px]">
      <div className="flex flex-col gap-2 mb-5">
        {result.boxes?.map((b, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-[9px] p-4">
            <div className="text-[10px] text-white/40 tracking-[1px] uppercase mb-1">{b.l}</div>
            <div className={`text-[1.3rem] font-semibold font-serif ${b.teal ? "text-teal" : b.gold ? "text-gold" : "text-white"}`}>{b.v}</div>
          </div>
        ))}
      </div>
      <a href="https://www.wealthy.in/partners/nithi58604" target="_blank" rel="noreferrer" className="block bg-teal hover:bg-teal-2 text-white text-center py-3 rounded-[9px] no-underline text-[13px] font-semibold transition-colors">{result.cta ?? "Invest now →"}</a>
      <p className="text-[9.5px] text-white/30 text-center mt-2.5 leading-[1.6]">For illustration only. Subject to market risks. Not investment advice.</p>
    </div>
  );
}

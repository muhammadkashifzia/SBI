import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function StoreForm({ fields, formik }) {
  return (
    <div className="space-y-[29px] text-[#2C3237] font-normal text-[16px]">
      {fields.map((field, index) => (
        <div key={index}>
          {field.label && (
            <label className="block mb-[8px] h-[23px]">{field.label}</label>
          )}

          {field.type === "input" && (
            <Input
              name={field.name}
              value={formik.values[field.name] || ''}
              onChange={formik.handleChange}
              placeholder={field.placeholder}
              className="px-[16px] py-[14px] h-[48px] rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
            />
          )}

          {field.type === "select" && (
            <Select
              name={field.name}
              value={formik.values[field.name] || ''}
              onValueChange={(value) => formik.setFieldValue(field.name, value)}
            >
              <SelectTrigger className="!h-[48px] w-full px-[16px] py-[14px] text-[16px]">
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((opt, idx) => (
                  <SelectItem
                    key={idx}
                    value={opt}
                    className="h-[48px] flex items-center text-[16px] py-[14px] px-[16px]"
                  >
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {field.type === "textarea" && (
            <>
              <Textarea
                name={field.name}
                value={formik.values[field.name] || ''}
                onChange={formik.handleChange}
                placeholder={field.placeholder}
                rows={4}
                className="px-[16px] rounded-[4px] py-[14px] !h-[73px]"
              />
              {field.note && (
                <span className="block text-[#808080] text-[10px] font-normal mt-[8px] rounded-[4px] focus-visible:outline-none focus-visible:ring-0">
                  {field.note}
                </span>
              )}
            </>
          )}

          {field.type === "priceRangeGroup" && (
            <div className="flex flex-col gap-2 w-full h-[79px]">
              <div className="flex gap-12 text-[14px] text-[#2C3237] font-medium w-full">
                <div className="flex items-center gap-2 flex-1">
                  <img
                    src="/svg/shared/day.svg"
                    alt=""
                    className="w-[12px] w-[12px]"
                  />
                  <span>夜価格</span>
                </div>

                <div className="flex items-center gap-2 flex-1">
                  <img
                    src="/svg/shared/night.svg"
                    alt=""
                    className="w-[12px] w-[12px]"
                  />
                  <span>昼価格</span>
                </div>
              </div>

              <div className="flex gap-12 w-full">
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    name="priceRangeNightMin"
                    value={formik.values.priceRangeNightMin || ''}
                    onChange={formik.handleChange}
                    placeholder="最小"
                    className="h-[48px] flex-1 rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
                  />
                  <span>~</span>
                  <Input
                    name="priceRangeNightMax"
                    value={formik.values.priceRangeNightMax || ''}
                    onChange={formik.handleChange}
                    placeholder="最大"
                    className="h-[48px] flex-1 rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex items-center gap-2 flex-1">
                  <Input
                    name="priceRangeDayMin"
                    value={formik.values.priceRangeDayMin || ''}
                    onChange={formik.handleChange}
                    placeholder="最小"
                    className="h-[48px] flex-1 rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
                  />
                  <span>~</span>
                  <Input
                    name="priceRangeDayMax"
                    value={formik.values.priceRangeDayMax || ''}
                    onChange={formik.handleChange}
                    placeholder="最大"
                    className="h-[48px] flex-1 rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
          )}

          {field.type === "inputWithIcon" && (
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
                <img
                  src={field.iconUrl}
                  alt="icon"
                  className="w-[30px] h-[20px] object-contain"
                />
              </span>

              <Input
                name={field.name}
                value={formik.values[field.name] || ''}
                onChange={formik.handleChange}
                placeholder={field.placeholder}
                className="pl-10 h-[48px] pl-[50px] py-[16px] rounded-[4px] focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
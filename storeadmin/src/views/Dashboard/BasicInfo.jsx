import { useFormik } from "formik";
import ImageUploadSection from "../../components/dashboard/ImageUploadSection";
import FormField from "../../components/shared/StoreForm";
import { Button } from "@/components/ui/button";
import {
  formFields,
  urlFeilds,
  infolimit,
} from "../../InputFeildData/Dhshboard/basicinfo";

const DashboardHome = ({ profileChecks, setProfileChecks }) => {
  const formik = useFormik({
    initialValues: {
      // Basic Info
      storeName: "",
      storeFurigana: "",
      storeGenre: "",
      storeSubCategory: "",
      catchCopy: "",
      storeDescription: "",
      prefecture: "",
      area: "",
      nearestStation: "",
      phoneNumber: "",
      priceRangeNightMin: "",
      priceRangeNightMax: "",
      priceRangeDayMin: "",
      priceRangeDayMax: "",
      postalCode: "",
      address: "",
      managerName: "",
      email: "",

      // Limited Info
      seats: "",
      privateRoom: "",
      smokingRoom: "",
      parking: "",
      childrenAllowed: "",
      petsAllowed: "",
      freeWifi: "",

      // URLs
      website: "",
      facebook: "",
      instagram: "",
      tiktok: "",
      x: "",
      youtube: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const handleSave = () => {
    // validate form fields and update state
    setProfileChecks((prev) => ({ ...prev, basicInfo: true }));
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* Title Section */}
        <div className="bg-white p-[16px] lg:p-[20px]">
          {/* Title Row */}
          <div className="flex items-center gap-[10px] mt-[32px] ">
            <img
              src="/svg/shared/check.svg"
              alt=""
              className="w-[20px] lg:w-[24px]"
            />
            <h1 className="text-[16px] lg:text-[22px] text-[#2C3237] font-bold lg:font-black leading-[22px] lg:leading-[26.4px]">
              インペリアルタウンエー・帝国ホテルレストラン・
            </h1>
          </div>

          {/* Subinfo Row */}
          <div className="flex flex-wrap items-center gap-[8px] lg:gap-[10px] mt-[12px] lg:mt-[15px] text-[#2C3237] text-[14px] lg:text-[16px] font-semibold lg:font-bold h-auto lg:h-[17px]">
            <span className="text-[#006BA6] font-medium">
              グルメ / サブカテゴリー
            </span>
            <span className="flex items-center gap-1">
              <img
                src="/svg/shared/location.svg"
                alt=""
                className="w-[10px] lg:w-[12px]"
              />
              豊田駅前 / エリア名
            </span>
          </div>
        </div>

        {/* Banner Upload Section */}
        <div className="w-full bg-white px-[16px] lg:px-[20px]">
          <h1 className="text-[15px] lg:text-[16px] font-normal py-[16px] lg:py-[20px] text-[#2C3237] pb-[8px] mt-[20px] lg:mt-[29px]">
            バナー写真
          </h1>
          <ImageUploadSection />
          <div className="bg-white py-[16px] lg:py-[20px]">
            <FormField fields={formFields} formik={formik} />
          </div>
        </div>

        {/* Limited Info Section */}
        <div className="mt-[20px] bg-white p-[16px] lg:p-[20px]">
          <h1 className="text-[#2C3237] font-bold text-[18px] lg:text-[22px] leading-[24px] lg:leading-[26px] pt-[16px] lg:pt-[20px] pb-[24px] lg:pb-[30px]">
            グルメカテゴリー限定情報
          </h1>
          <FormField fields={infolimit} formik={formik} />
        </div>

        {/* URL Section */}
        <div className="mt-[20px] bg-white px-[16px] lg:px-[20px] py-[16px] lg:py-[20px]">
          <FormField fields={urlFeilds} formik={formik} />
        </div>

        {/* Submit Button */}
        <div className="mt-[20px] lg:mt-[30px] mb-[21px] flex justify-center lg:justify-start ">
          <Button
            type="submit"
            onClick={handleSave}
            className="px-[20px] lg:px-[26px] py-[12px] lg:py-[14px] text-[15px] lg:text-[16px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] font-bold w-full max-w-[200px]"
          >
            保存
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DashboardHome;

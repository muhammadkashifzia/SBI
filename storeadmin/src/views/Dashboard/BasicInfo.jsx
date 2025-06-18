import { useFormik } from "formik";
import ImageUploadSection from "../../components/ImageUploadSection";
import FormField from "../../components/shared/StoreForm";
import { Button } from "@/components/ui/button";
import {formFields,urlFeilds,infolimit} from '../../InputFeildData/Dhshboard/basicinfo'
const DashboardHome = () => {
  const formik = useFormik({
    initialValues: {
      // Basic Info
      storeName: '',
      storeFurigana: '',
      storeGenre: '',
      storeSubCategory: '',
      catchCopy: '',
      storeDescription: '',
      prefecture: '',
      area: '',
      nearestStation: '',
      phoneNumber: '',
      priceRangeNightMin: '',
      priceRangeNightMax: '',
      priceRangeDayMin: '',
      priceRangeDayMax: '',
      postalCode: '',
      address: '',
      managerName: '',
      email: '',
      
      // Limited Info
      seats: '',
      privateRoom: '',
      smokingRoom: '',
      parking: '',
      childrenAllowed: '',
      petsAllowed: '',
      freeWifi: '',
      
      // URLs
      website: '',
      facebook: '',
      instagram: '',
      tiktok: '',
      x: '',
      youtube: ''
    },
    onSubmit: (values) => {
      console.log('Form values:', values); // This will print all form values to console
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="px-[20px] py-[20px]"> 
          <div className="bg-white mt-[32px]">
            <div className="flex items-center gap-[10px] ">
              <img src="/svg/shared/check.svg" alt="" className="w-[24px]" />
              <h1 className="text-[22px] text-[#2C3237] font-black leading-[26.4px]">
                インペリアルタウンエー・帝国ホテルレストラン・
              </h1>
            </div>

            <div className="flex items-center text-[16px] font-bold gap-[10px] mt-[15px] text-[#2C3237] h-[17px]">
              <span className="text-[#006BA6] font-medium">
                グルメ / サブカテゴリー
              </span>
              <span className="flex items-center gap-1">
                <img src="/svg/shared/location.svg" alt="" className="w-[12px]" />
                豊田駅前 / エリア名
              </span>
            </div>
          </div>
          
          <div className="w-full">
            <h1 className="text-[16px] font-normal text-[#2C3237] pb-[8px] mt-[29px]">
              バナー写真
            </h1>
            <ImageUploadSection />
          </div>

          <div className="mt-[29px] pb-[20px]">
            <FormField fields={formFields} formik={formik} />
          </div>

          <div className="mt-[20px]">
            <h1 className="text-[#2C3237] font-bold text-[22px] leading-[26px] pt-[20px] pb-[30px]">
              グルメカテゴリー限定情報
            </h1>
            <FormField fields={infolimit} formik={formik} />
          </div>

          <div className="mt-[20px] py-[20px]">
            <FormField fields={urlFeilds} formik={formik} />
          </div>
        </div>
        
        <Button 
          type="submit"
          className="px-[26px] py-[14px] mt-[10px] text-[16px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] cursor-pointer w-[150px] font-bold"
        >
          保存
        </Button>
      </form>
    </div>
  );
};

export default DashboardHome;
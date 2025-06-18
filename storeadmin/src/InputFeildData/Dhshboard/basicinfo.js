  export const formFields = [
    {
      label: "店舗名",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "storeName"
    },
    {
      label: "店舗名ふりがな",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "storeFurigana"
    },
    {
      label: "店舗ジャンル",
      placeholder: "選択してください",
      type: "select",
      options: ["レストラン", "カフェ", "居酒屋", "バー"],
      name: "storeGenre"
    },
    {
      label: "店舗サブカテゴリー",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "storeSubCategory"
    },
    {
      label: "キャッチコピー",
      placeholder: "こちらに入力してください",
      note: "最大400文字まで",
      type: "textarea",
      name: "catchCopy"
    },
    {
      label: "店舗紹介文",
      placeholder: "こちらに入力してください",
      note: "最大400文字まで",
      type: "textarea",
      name: "storeDescription"
    },
    {
      label: "都道府県",
      placeholder: "選択してください",
      type: "select",
      options: ["東京", "大阪", "名古屋"],
      name: "prefecture"
    },
    {
      label: "場所/ エリア",
      placeholder: "選択してください",
      type: "select",
      options: ["渋谷", "新宿", "池袋"],
      name: "area"
    },
    {
      label: "最寄駅",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "nearestStation"
    },
    {
      label: "電話番号",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "phoneNumber"
    },
    {
      placeholder: "こちらに入力してください",
      type: "priceRangeGroup",
      // Names for price range fields are handled separately in the component
    },
    {
      label: "郵便番号",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "postalCode"
    },
    {
      label: "住所",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "address"
    },
    {
      label: "担当者名",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "managerName"
    },
    {
      label: "メールアドレス",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "email"
    },
  ];

 export const infolimit = [
    {
      label: "座席・テーブル数",
      placeholder: "こちらに入力してください",
      type: "input",
      name: "seats"
    },
    {
      label: "個室の有無",
      placeholder: "選択してください",
      type: "select",
      options: ["有", "無"],
      name: "privateRoom"
    },
    {
      label: "喫煙室の有無",
      placeholder: "選択してください",
      type: "select",
      options: ["有", "無"],
      name: "smokingRoom"
    },
    {
      label: "駐車場の有無",
      placeholder: "選択してください",
      type: "select",
      options: ["有", "無"],
      name: "parking"
    },
    {
      label: "子供連れOKかどうか",
      placeholder: "選択してください",
      type: "select",
      options: ["OK", "NG"],
      name: "childrenAllowed"
    },
    {
      label: "ペット同伴OKかどうか",
      placeholder: "選択してください",
      type: "select",
      options: ["OK", "NG"],
      name: "petsAllowed"
    },
    {
      label: "Free Wifiあるかどうか",
      placeholder: "選択してください",
      type: "select",
      options: ["有", "無"],
      name: "freeWifi"
    }
  ];

  export const urlFeilds = [
    {
      label: "公式Website",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/webside.svg",
      name: "website"
    },
    {
      label: "Facebook",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/facebook.svg",
      name: "facebook"
    },
    {
      label: "Instagram",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/instgram.svg",
      name: "instagram"
    },
    {
      label: "TikTok",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/tiktok.svg",
      name: "tiktok"
    },
    {
      label: "X",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/x.svg",
      name: "x"
    },
    {
      label: "YouTube",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/youtube.svg",
      name: "youtube"
    },
  ];


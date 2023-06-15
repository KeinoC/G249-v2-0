import React, { createContext, useState } from "react";

export interface MediaContextProps {
    slideImages: {
        url: string;
        tags: string[];
        name: string;
    }[];
}

export const MediaContext = createContext<MediaContextProps>(
    {} as MediaContextProps
);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [slideImages, setSlideImages] = useState<
        MediaContextProps["slideImages"]
    >([
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaXixn0y4cpT_Dln6no6rwxU6zqi54WwAFIjMskesBjToULRaTGkEEVhaiXX73SEIbGob5LNN1MM97CUgoTytO7rKqCemyp1s-HUYBQ_7m1zBkIJYzSbzr0jbVf3UDxzPGRNlJY1yoKGfE7Cp41LpYEkWw=w1252-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate1",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaWeNVj6jLqMAg123TIQiifpIG3bsq-cv6pjY_WMj47echY4zsc-KgrAgEqBOd0mipPBMxuJ6T-Eb2FqZganLxdsHDC7Lw5-qcwYTYv-tGKdEULq39aYRrVU7H6Zt3llKle_F91Po5uY1Lonkb5hTNWHvw=w1252-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate2",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaUgx_wtXL6P41mXudive6AqgcYMpMul098uCpYfQHQNHJdH6hCcsGOsCx9ju_I9aBRRQ2TJtOHodjzajpNW1qU19iF3mt0fCzXXZeDXHbQr7uu1b5zGGF5OQl-93gsEVH-b8VWPjCRID4ZZIQFxGMH_iw=w1252-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate3",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaWhtP1EXBPfk83o8rds_nrwQQ9alzP9liDD3twFWdShNGqk9QDC9e9-wr-jJTeik7JcxOhCm-lL5stYCnZLUvnxQ0OIatBhQ6sUje61RbAjgM7SP6P0D7mkIbWMKPtPH5kczuieWAgJOoWIW7Nvf6sIbg=w2224-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate4",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaWhtP1EXBPfk83o8rds_nrwQQ9alzP9liDD3twFWdShNGqk9QDC9e9-wr-jJTeik7JcxOhCm-lL5stYCnZLUvnxQ0OIatBhQ6sUje61RbAjgM7SP6P0D7mkIbWMKPtPH5kczuieWAgJOoWIW7Nvf6sIbg=w2224-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate5",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaVgzl6XGQKRJI2xpdiUWO-1iYNc46Kn2E70HzrEg51Z9tra2RyFFzPZnRQ_HMO2TnfNmQd01LdU1eKMYsXRgiwV93EKQ7EcqPNijTkxT59mLlcu8RHOlRU5UhW_dpXo87SjIRpeeZQCw2GKv1FttqCzQoLM3Ud3s1FXDTBokmCGjVG5xZjmOboKIv_Hee3hTRudlYHKAmFQQBkR885MiMciK_D08Q7VdWulD9vjDqIGL59bpQOTUDuLwC3zrhy4Ge4dWW5E1aRKBUckLkTRFZKjj07yX71SbarYn5XbVfRGz_ODzFgAfIBGXXGjkermwdHKKUl9TO85KTphbmu5ehI6FazFQ1Exf6_eErSJBlIBYTN9Ve_-HFq8_8hDH5HdAaAtJ5tT6Ku3AZJ54Qzqiz2EzY0vQHVk62ULKK578FmZnMZxNzqwglmUAsxDsCzctsryy16_rUwUtEF0we1uo4bnxngFCB5T-Wf82DpElt93yD1m-boU_0W32SXOtHfIG8SEc5RxfjwCDSiPUw9gZn30qf62sLvt3T4cru_d-6lMnXCAY-AHGwRdgtifqEmxKwaX1ZPU8wk3gbWTCrCNsTC1543CEFl9avvipv6oF37LaIzGFWc8L5vc6MZ55w7UI-4Wczlj_0dj1AUb9f52V8skD6dHRpZ-wKFL6nwDatOuyu9fD28-4do3CJ7a0Vosluseyh_klXLaqJSxI74je1CUk5e2UIgdHyahjw_6ZjgoBoi1rF-mzvUgKeZ4AFyxWwm0V8F66B01F6MYfJqsByx9WrpJs_zuleA0H796z-ytfmDli0M1-9AyNRshUgDmiiLlY3oU9Bza-quXIj2B2oAKWAZn2gYl7RoPHdLFeFQ3Spo8M2xE9ywv7oORLzfi1BdOIxSe54vO5vtLlBZ-bZfDukw=w2224-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate6",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaVsppcnwBM-w0tuB6RhvPfS-owvgjk51NydS5Uvm-098e8tyvJt4KffF-dIwan2_yUvu9FaxRv7hL_Z32YU5UKvy5dLmgTPrgVj9HSg1m7aM4udnW6gtyrXdwrcof7YbHhAIwPXYH4ALatgjH8ggJ8zo9w1W9TY_Z46b8rY9_PCj6ZZHqFT-l2kc3Zh8tjxGRmCGZujTCkI9RgX6NA418bd9q1OVxVujnW13-8tu_hBjMNi7olfJq41vwn5f-vtZ6Y93ov6_Z3V4SqEeIGB_EyfGkHWscXoIbiTA-9yFszxMtgcxS-HTDEQToiHImPlcfWi1Uh1LMjOLKR1ak_z4SXEb7LQJEw-PdeFuCvZeEO0oucjY16je-u79K5ZRhgjtp1IuoFbMA5RNIYxogqi71pFNgj_TYXERBuyrJCCOsVShWIhj2YnE1H7Assy7pz4glEY3E3vTMJFONPsuP9Flpw4lhCwX6OR16260w25n87HfaDrdY5SrGZf9Fbdh6_wzXFLXkEeKlGy72R5RwCsUVXddykVeyVBimh1iOw4HVgzos17cLjCclit5uCfxjDFMoDaE3lh8B6Q6dUsaazE29curI6riFVudVVBHU3QYcp9TeyQQJp0CId8XQ2PWxez1YDiVYInQ5atkvrguyAgngFfFl-x8zdIm6K0q3JE2iIqwWLAPe_gi49j4XjRlcoP-umA0LDya2P4Y4dssTJh6VyIpgqeJ5J06ozqedxQhOzGDpUqku3X9odDszMEN0MDhwRUKVaJVoSPUlaRBpot0TrrDtYVdZlP5kANHRzBVGRJ-zkYQ-IpoDo3rgMNELrLvWpDxFrpM3cM23fSDuscvKfMPM8b41B1WBA3t0MAfNtrJGcofPlaapkkx6upraXzYqsd_0B8-ACdN0FHin3O63gsOnw=w2224-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate7",
        },
    ]);

    return (
        <MediaContext.Provider value={{ slideImages }}>
            {children}
        </MediaContext.Provider>
    );
};

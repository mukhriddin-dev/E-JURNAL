const app = Vue.createApp({
    data(){
        return {
            tasks:[
                {
                    id:"#12211",
                    user:"Mukhriddin Khodiev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#1233",
                    user:"G'olibjon Narzullayev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#2312",
                    user:"Diyorbek Jo'rayev",
                    comment:"Reja jarayonda",
                    status: 'warning',
                },
                {
                    id:"#433",
                    user:"Temurbek Uralov",
                    comment:"Oylik reja bajarilmadi",
                    status: 'danger',
                },
                {
                    id:"#4133",
                    user:"Saidalixon Sobirov",
                    comment:"Jarayonda",
                    status: 'warning',
                },
                {
                    id:"#6133",
                    user:"Mirkomilxon Sobirov",
                    comment:"bajarildi",
                    status: 'success',
                },
                {
                    id:"#12211",
                    user:"Mukhriddin Khodiev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#1233",
                    user:"G'olibjon Narzullayev",
                    comment:"Bajarib bo'lindi",
                    status: 'success',
                },
                {
                    id:"#2312",
                    user:"Diyorbek Jo'rayev",
                    comment:"Reja jarayonda",
                    status: 'warning',
                },
                {
                    id:"#433",
                    user:"Temurbek Uralov",
                    comment:"Oylik reja bajarilmadi",
                    status: 'danger',
                },
                {
                    id:"#4133",
                    user:"Saidalixon Sobirov",
                    comment:"Jarayonda",
                    status: 'warning',
                },
               
            ]
        }
    }
});


app.mount("#root");
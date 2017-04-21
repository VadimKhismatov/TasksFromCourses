$(function(){
    var html = $("#test").html();

    var data =[
        {
            fullname:'Хисматов Вадим Юрьевич',
            logo:"img/avatar.jpeg",
            aboutMe:'Студент GoIT GoFrontend',
            whyFe:"Хочу учить Фронтенд, потому что:",
            reasons:{
                first:"Динамично развивающееся направление",
                second:"Всегда видишь результат работы",
                third:"Большое количество разнообразных проектов",
                fourth:"Backend не зацепил"
            },
            contacts:{
                topic:"Мой контактный телефон:",
                number:"+380957352814"
            },
            social:{
                topic:" Мой профиль Вконтакте:",
                linkTitle:"Хисматов Вадим",
                href:"http://vk.com/darseed"
            },
            feedback:{
                topic:"Мой Фидбек:",
                text:"Могу чего нибудь сверстать простенького"
            }
        },
        
    ];
    var content = tmpl(html, {
        data:data
    });

    $('body').append(content);
});
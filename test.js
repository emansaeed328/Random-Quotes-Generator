

var quotes = [
    { 
        desc:'“You cannot continue to victimize someone else just because you yourself were a victim once—there has to be a limit”',
        auther_name:'-- Edward Said',
        image:'images/auth1.jpg'
    },
    {
        desc:'“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
        auther_name:'-- Bernard M. Baruch',
        image:'images/auth7.jpg'
    },
    {
        desc:'“The most courageous act is still to think for yourself. Aloud.”',
        auther_name:'-- Coco Chanel',
        image:'images/auth3.jpg'
    },
    {
        desc:'“You wanna fly, you got to give up the shit that weighs you down.”',
        auther_name:'-- Toni Morrison',
        image:'images/auth4.jpg'
    },
    {
    desc:'“A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window.”',
    auther_name:'-- Gilles Deleuze',
    image:'images/auth5.jpg'
    },
    {
        desc:'“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        auther_name:'-- Albert Einstein',
        image:'images/th6.jpg'
        },
        {
            desc:'“You only live once, but if you do it right, once is enough.”',
            auther_name:'-- Mae West',
            image:'images/auth8.jpg'
        }];



    var last_no ;
    var rand_no;
    var displayed = [];

function QouteChange(){

    if(displayed.length == quotes.length)
    {
        displayed = [];
    }
    do{
        rand_no =Math.round(Math.random() * quotes.length) ;

    }while(rand_no == last_no || displayed.includes(rand_no));

    var cartona = '';
        cartona += `<div class="content h-50" id="quote_content">
                    <div class="text-center w-25 d-flex m-auto">
                    <img
                        src="${quotes[rand_no].image}"
                        alt=""
                        class="w-100 rounded-img text-center"
                    />
                    </div>
                    <p class="p-3">${quotes[rand_no].desc}</p>

                    <h2 class="auth-name">${quotes[rand_no].auther_name}</h2>
                    </div>
                    <button
                    onclick="QouteChange()"
                    id="btn"
                    class="btn bg-primary text-white rounded d-flex ms-auto m-5"
                >
                    See Another Quote >>
                </button>`;
                
    
    last_no = rand_no;
    displayed.push(rand_no);
    document.getElementById('qoute').innerHTML = cartona;
}
    var btnChatClose = document.querySelector('.chatContent__headingClose');
    var contentChat = document.querySelector('.chatContent');
    var chat = document.querySelector('.chat');

    function showChat(){
        contentChat.classList.add('open')
    }
    function closeChat(){
        contentChat.classList.remove('open');
    }

    chat.addEventListener('click',showChat)
    btnChatClose.addEventListener('click',closeChat)

    var btnMore = document.querySelector('.btn-more');
    var showInfo = document.querySelector('.dicscription__show');
    var gradient = document.querySelector('.gradient');
    var btnMoreOut = document.querySelector('.btn-more-out');
    function showInfoMore(){
        showInfo.classList.add('more');
        gradient.classList.add('hidden')
        btnMore.classList.add('hidden')
        btnMoreOut.classList.add('show')
    }
    function hiddenInfoMore(){
        showInfo.classList.remove('more');
        gradient.classList.remove('hidden')
        btnMore.classList.remove('hidden')
        btnMoreOut.classList.remove('show')
    }
    btnMore.addEventListener('click',showInfoMore)
    btnMoreOut.addEventListener('click',hiddenInfoMore)

    var fillterBtn0 = document.querySelector('.fillter__btn0');
    var fillterBtn1 = document.querySelector('.fillter__btn1');
    var fillterBtn2 = document.querySelector('.fillter__btn2');
    var fillterBtn3 = document.querySelector('.fillter__btn3');
    var fillterBtn4 = document.querySelector('.fillter__btn4');
    var fillterBtn5 = document.querySelector('.fillter__btn5');
    var fillterBtn6 = document.querySelector('.fillter__btn6');
    var fillterBtn7 = document.querySelector('.fillter__btn7');
    var selectFillterBtn = document.querySelector('.fillter__btn-select');
    var check0 = document.querySelector('.check0');
    var alive0 = document.querySelector('.alive0');
    var defaul0 = document.querySelector('.defaul0');
    var check1 = document.querySelector('.check1');
    var alive1 = document.querySelector('.alive1');
    var defaul1 = document.querySelector('.defaul1');
    var check2 = document.querySelector('.check2');
    var alive2 = document.querySelector('.alive2');
    var defaul2 = document.querySelector('.defaul2');
    var check3 = document.querySelector('.check3');
    var alive3 = document.querySelector('.alive3');
    var defaul3 = document.querySelector('.defaul3');
    var check4 = document.querySelector('.check4');
    var alive4 = document.querySelector('.alive4');
    var defaul4 = document.querySelector('.defaul4');
    var check5 = document.querySelector('.check5');
    var alive5 = document.querySelector('.alive5');
    var defaul5 = document.querySelector('.defaul5');
    var check6 = document.querySelector('.check6');
    var alive6 = document.querySelector('.alive6');
    var defaul6 = document.querySelector('.defaul6');
    var check7 = document.querySelector('.check7');
    var alive7 = document.querySelector('.alive7');
    var defaul7 = document.querySelector('.defaul7');

    function selectFillter0(){
        check0.classList.add('show');
        alive0.classList.add('show');
        defaul0.classList.add('hidden');
    }
    function selectFillter1(){
        check1.classList.add('show');
        alive1.classList.add('show');
        defaul1.classList.add('hidden');
    }
    function selectFillter2(){
        check2.classList.add('show');
        alive2.classList.add('show');
        defaul2.classList.add('hidden');
    }
    function selectFillter3(){
        check3.classList.add('show');
        alive3.classList.add('show');
        defaul3.classList.add('hidden');
    }
    function selectFillter4(){
        check4.classList.add('show');
        alive4.classList.add('show');
        defaul4.classList.add('hidden');
    }
    function selectFillter5(){
        check5.classList.add('show');
        alive5.classList.add('show');
        defaul5.classList.add('hidden');
    }
function selectFillter6(){
    check6.classList.add('show');
    alive6.classList.add('show');
    defaul6.classList.add('hidden');
}
function selectFillter7(){
    check7.classList.add('show');
    alive7.classList.add('show');
    defaul7.classList.add('hidden');
}
function noSelectFillter0(){
    check0.classList.remove('show');
    alive0.classList.remove('show');
    defaul0.classList.remove('hidden');
}
function noSelectFillter1(){
    check1.classList.remove('show');
    alive1.classList.remove('show');
    defaul1.classList.remove('hidden');
}
function noSelectFillter2(){
    check2.classList.remove('show');
    alive2.classList.remove('show');
    defaul2.classList.remove('hidden');
}
function noSelectFillter3(){
    check3.classList.remove('show');
    alive3.classList.remove('show');
    defaul3.classList.remove('hidden');
}
function noSelectFillter4(){
    check4.classList.remove('show');
    alive4.classList.remove('show');
    defaul4.classList.remove('hidden');
}
function noSelectFillter5(){
    check5.classList.remove('show');
    alive5.classList.remove('show');
    defaul5.classList.remove('hidden');
}
function noSelectFillter6(){
    check6.classList.remove('show');
    alive6.classList.remove('show');
    defaul6.classList.remove('hidden');
}
function noSelectFillter7(){
    check7.classList.remove('show');
    alive7.classList.remove('show');
    defaul7.classList.remove('hidden');
}

    fillterBtn0.addEventListener('click', selectFillter0)
    fillterBtn0.addEventListener('dblclick', noSelectFillter0)

    fillterBtn1.addEventListener('click', selectFillter1)
    fillterBtn1.addEventListener('dblclick', noSelectFillter1)

    fillterBtn2.addEventListener('click', selectFillter2)
    fillterBtn2.addEventListener('dblclick', noSelectFillter2)

    fillterBtn3.addEventListener('click', selectFillter3)
    fillterBtn3.addEventListener('dblclick', noSelectFillter3)

    fillterBtn4.addEventListener('click', selectFillter4)
    fillterBtn4.addEventListener('dblclick', noSelectFillter4)

    fillterBtn5.addEventListener('click', selectFillter5)
    fillterBtn5.addEventListener('dblclick', noSelectFillter5)

    fillterBtn6.addEventListener('click', selectFillter6)
    fillterBtn6.addEventListener('dblclick', noSelectFillter6)

    fillterBtn7.addEventListener('click', selectFillter7);
    fillterBtn7.addEventListener('dblclick', noSelectFillter7);


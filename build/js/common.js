const submitBtn = document.querySelector('[data-submit]');
const backBtn = document.querySelector('[data-back]');
const subscribeForm = document.querySelector('.subscribe-form');
const thanksBlock = document.querySelector('.thanks-box');


const showThaksBlock = (btn,form,thanks,backBtn) => {
    btn.onclick = () => {
        form.classList.add('hide');
        thanks.classList.add('show');
    },

    backBtn.onclick = () => {
        form.classList.remove('hide');
        thanks.classList.remove('show');
    }
}

if (subscribeForm) {
    showThaksBlock(submitBtn, subscribeForm,thanksBlock, backBtn)
}

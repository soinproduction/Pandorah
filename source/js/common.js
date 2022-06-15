const submitBtn = document.querySelector('[data-submit]');
const backBtn = document.querySelector('[data-back]');
const updateForm = document.querySelector('.update-form');
const thanksBlock = document.querySelector('.thanks-box');


const showThaksBlock = (btn, form, thanks, backBtn) => {
    btn.onclick = () => {
            form.classList.add('hide');
            thanks.classList.add('show');
        },

        backBtn.onclick = () => {
            form.classList.remove('hide');
            thanks.classList.remove('show');
        }
}

if (updateForm) {
    showThaksBlock(submitBtn, updateForm, thanksBlock, backBtn)
}
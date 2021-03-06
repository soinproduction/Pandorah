const submitBtn = document.querySelector('[data-submit]');
const backBtn = document.querySelector('[data-back]');
const updateForm = document.querySelector('.update-form');
const thanksBlock = document.querySelector('.thanks-box');

let paralaxBlock = document.querySelectorAll('.paralax-block');

AOS.init();

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




// const paralaxBg = function(item) {
//     for (let i = 0; i < item.length; i++) {
//         window.addEventListener('mousemove', function(e) {
//             let x = e.clientX / window.innerWidth;
//             let y = e.clientY / window.innerHeight;
//             item[i].style.backgroundPosition = `${ y * 20 + '%'}  ${'top'}`;
//         });
//     }
// }
// paralaxBg(paralaxBlock);

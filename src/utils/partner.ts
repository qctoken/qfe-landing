export function handleClickPartnerArrowRight(){
    const partner__pocketAbout = document.querySelectorAll('.partner__pocketAbout');
    const count_pocket = parseInt(document.querySelector('.partner__popUp')!.getAttribute('pocket-count')!);
    const num_pocket = parseInt(document.querySelector('.partner__pocketAbout.active')!.getAttribute('pocket-num')!);

    if(count_pocket > num_pocket){
        partner__pocketAbout[num_pocket - 1].classList.remove('active');
        partner__pocketAbout[num_pocket].classList.add('active');

        refresh_num(num_pocket + 1);
        refresh_color(num_pocket + 1);
    }
}

export function  handleClickPartnerArrowLeft(){
    const partner__pocketAbout = document.querySelectorAll('.partner__pocketAbout');
    let num_pocket = parseInt(document.querySelector('.partner__pocketAbout.active')!.getAttribute('pocket-num')!);

    if(num_pocket != 1){
        partner__pocketAbout[num_pocket - 1].classList.remove('active');
        partner__pocketAbout[num_pocket - 2].classList.add('active');

        refresh_num(num_pocket - 1);
        refresh_color(num_pocket - 1);
    }
}

export function refresh_num(num: any){
    const partner__curr = document.querySelector('.partner__nav-curr');
    partner__curr!.innerHTML = "0" + num;
  }

export function refresh_color(num: any){
    const content_colors = ["partner__pocketBlockContent_white", "partner__pocketBlockContent_blue", "partner__pocketBlockContent_yellow"];
    const partner__pocket_popUp_content = document.querySelector('.partner__pocketBlockContent');
    content_colors.forEach(function(element: any) {
        let cont_color = document.querySelector("."+element);
        if(cont_color != null){ cont_color.classList.remove(element);}
    });
    partner__pocket_popUp_content!.classList.add(content_colors[num-1]);
}
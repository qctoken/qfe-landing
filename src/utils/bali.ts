export function handleClickBaliArrowRight() {
  const cards = document.querySelectorAll('.bali__card');
  const count_cards = parseInt(document.querySelector('.bali__cardBlock')!.getAttribute('card-count')!);
  const active_card = document.querySelector('.bali__card_active');
  const num_card = parseInt(active_card!.getAttribute('card-num')!);

  if(count_cards > num_card){
      active_card!.classList.add('bali__card_hidden');
      active_card!.classList.remove('bali__card_active');
      cards[num_card].classList.add('bali__card_active');
  }
}

export function handleClickBaliArrowLeft() {
  const cards = document.querySelectorAll('.bali__card');
  const active_card = document.querySelector('.bali__card_active');
  const num_card = parseInt(active_card!.getAttribute('card-num')!);

  if(num_card != 1){
      active_card!.classList.remove('bali__card_active');
      cards[num_card - 2].classList.add('bali__card_active');
      cards[num_card - 2].classList.remove('bali__card_hidden');
  }
}

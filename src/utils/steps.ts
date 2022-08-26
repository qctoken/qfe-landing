function goToStep(numb: number) {
  const options = document.querySelectorAll(".step-block__option");
  const steps = document.querySelectorAll(".step-block__step");
  const active_option = document.querySelector(".step-block__option_active");
  const active_step = document.querySelector(".step-block__step_active");

  active_option!.classList.remove("step-block__option_active");
  active_step!.classList.remove("step-block__step_active");

  options[numb - 1].classList.add("step-block__option_active");
  steps[numb - 1].classList.add("step-block__step_active");

  changeNumb(numb);
  changeActiveArrows(numb);
}

function changeNumb(numb: number) {
  const curr_numb = document.querySelector(".step-block__nav-curr");

  curr_numb!.innerHTML = (numb < 10 ? "0" : "") + numb;
}

function changeActiveArrows(numb: number) {
  const count_steps = parseInt(
    document.querySelector(".step-block")!.getAttribute("step-count")!
  );
  const step_arrow_left = document.querySelector(".step-block__arrow-left");
  const step_arrow_right = document.querySelector(".step-block__arrow-right");

  if (count_steps == numb) {
    step_arrow_right!.classList.remove("step-block__arrow-right_active");
  } else {
    step_arrow_right!.classList.add("step-block__arrow-right_active");
  }

  if (numb == 1) {
    step_arrow_left!.classList.remove("step-block__arrow-left_active");
  } else {
    step_arrow_left!.classList.add("step-block__arrow-left_active");
  }
}


export function handleClickStepArrowRight() {
  const count_steps = parseInt(
    document.querySelector(".step-block")!.getAttribute("step-count")!
  );
  const num_step = parseInt(
    document
      .querySelector(".step-block__step_active")!
      .getAttribute("step-num")!
  );

  if (count_steps > num_step) {
    goToStep(num_step + 1);
  }
}

export function handleClickStepArrowLeft() {
    const num_step = parseInt(
      document
        .querySelector(".step-block__step_active")!
        .getAttribute("step-num")!
    );

    if (num_step != 1) {
      goToStep(num_step - 1);
    }
}

export const handleClickOption = (event: Event) => {
  // @ts-ignore
  const num_step = parseInt(event.currentTarget!.getAttribute("step-num")!);

  goToStep(num_step);
};
function Ad(props) {
  const {name, price, image, numberOfImages} = props;
  return (
    <li class="ad">
      <div class="ad__card">
        <img class="ad__img" src={image} />
        <div class="ad__info">
          <div class="ad__img-counter">{numberOfImages}</div>
          <button>
            <svg id="tab-saved-outlined" viewBox="0 0 20 23"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6662 2.67743C15.2316 2.4378 14.6737 2.42307 14.129 2.42307H6.3871C5.915 2.42307 5.5035 2.4239 5.1297 2.46298C4.7588 2.50175 4.4817 2.57357 4.2734 2.68385C3.9394 2.86065 3.5484 3.26422 3.5484 4.55759V20.3501L9.0377 17.197C9.4422 16.9647 9.9532 16.9564 10.3664 17.1754L16.4516 20.4019V4.55759C16.4516 3.30785 16.0146 2.86953 15.6662 2.67743ZM16.4628 1.4572C17.4048 1.97661 18 2.96131 18 4.55759V20.8156C18 21.7363 16.9175 22.2918 16.0649 21.8397L9.7269 18.4792L3.9742 21.7836C3.1148 22.2772 2 21.7094 2 20.778V4.55759C2 3.00494 2.4905 1.98549 3.5005 1.45078C3.9642 1.2053 4.4747 1.09925 4.9547 1.04908C5.424 1.00002 5.918 1.00004 6.3651 1.00005H14.129C14.143 1.00005 14.1573 1.00004 14.172 1.00003C14.6731 0.999603 15.6315 0.9988 16.4628 1.4572Z" fill="inherit"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 5.75C15 6.16421 14.6642 6.5 14.25 6.5H2.75C2.3358 6.5 2 6.16421 2 5.75C2 5.33579 2.3358 5 2.75 5H14.25C14.6642 5 15 5.33579 15 5.75Z" fill="inherit"></path> </svg>
          </button>
          <p class="ad__name">{name}</p>
          <span class="ad__price">{price}</span>
        </div>
      </div>
    </li>
  );
}

export default Ad;

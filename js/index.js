document.querySelector('.work .show-more').addEventListener('click', function(element){
    //element.classList.toggle('show');
    // this.classList.toggle('show');
    this.classList.toggle('hide');
    document.querySelector('.work .more-work').classList.toggle('show')
    // console.log(this);
});
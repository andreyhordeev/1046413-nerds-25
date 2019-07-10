var contacts = document.querySelector(".contacts-button");
	var modal = document.querySelector(".modal-letter");
	var close = document.querySelector(".modal-close");
	var nameLetter = document.querySelector(".modal-input-name");
	var email = modal.querySelector("[name=email]");
	var letter = modal.querySelector("[name=letter]");
	var form = modal.querySelector("form");
	
	var isStorageSupport = true;
  	var storage = "";
  
  	try {
    	storage = localStorage.getItem("login");
  	} catch (err) {
    	isStorageSupport = false;
  	}

	contacts.addEventListener("click", function (evt) {
		evt.preventDefault();
		modal.classList.add("modal-show");

		if (storage) {
			email.value = storage;
		}
		nameLetter.focus();
	});

	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		modal.classList.remove("modal-show");
	});

	form.addEventListener("submit", function (evt) {
		if (!nameLetter.value || !email.value || !letter.value) {
			evt.preventDefault();
			console.log("Нужно заполнить все поля");
		} else {
			if (isStorageSupport) {
        	localStorage.setItem("email", email.value);
      		}	
		}
	});

	window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      	evt.preventDefault();
      	if (modal.classList.contains("modal-show")) {
        	modal.classList.remove("modal-show");
      		}
    	}
  	});
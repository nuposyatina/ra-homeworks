'use strict';

const AuthForm = function({onAuth}) {
	let nameField, emailField, passwordField;
	
	function checkEmail(e) { 
		e.currentTarget.value = e.currentTarget.value.replace(/[^\w@\.-]+/gi, ''); 
	} 
	
	function checkPassword(e) { 
		e.currentTarget.value = e.currentTarget.value.replace(/[^\w]+/gi, ''); 
	} 
	
	
	function onSend(event) {
		if((!onAuth) || typeof onAuth !== 'function'){
			return null;
		}
		event.preventDefault();
	
		const user = {
			name : nameField.value,
			email : emailField.value,
			password : passwordField.value
		};
	
		onAuth(user)
	}

	return (
    <form 
      className="ModalForm"
      action="/404/auth/"
      method="POST"
      onSubmit={onSend}
    >
			<div className="Input">
				<input
          required
          type="text"
          placeholder="Имя"
          ref={el => nameField = el}
        />
				<label></label>
			</div>
			<div className="Input">
				<input
          type="email"
          placeholder="Электронная почта"
          onChange={checkEmail}
          ref={el => emailField = el}
        />
				<label></label>
			</div>
			<div className="Input">
				<input
          required
          type="password"
          placeholder="Пароль"
          onChange={checkPassword}
          ref={el => passwordField = el}
        />
				<label></label>
			</div>
			<button type="submit">
				<span>Войти</span>
				<i className="fa fa-fw fa-chevron-right"></i>
			</button>
		</form>
	);
}
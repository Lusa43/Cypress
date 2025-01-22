describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get('#mail')  .type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажали войти
        cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // Есть текст
        cy.get('#messageHeader') .should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // Есть крестик и он виден
     })

    it('Восстановить пароль', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton') .click();
        cy.get('#mailForgot') .type('german@dolnikov.ru');
        cy.get('#restoreEmailButton') .click();
        cy.get('#forgotForm > .header') .contains('Восстановите пароль');
        cy.get('#messageHeader') .contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible');
    })


    it('Правильный догин и неправильный пароль', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get('#mail')  .type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass') .type('iLoveqastudio2'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // Есть крестик и он виден
    })

    
    it('Логин без @', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get('#mail')  .type('germandolnikov222.ru'); // Ввели неверный логин
        cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажали войти
        cy.get('#messageHeader') .contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader') .should('be.visible');
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // Есть крестик и он виден
     })

    it('Строчные буквы в логине', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get('#mail')  .type('GerMan@Dolnikov.ru'); // Ввели верный логин
        cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажали войти
        cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // Есть текст
        cy.get('#messageHeader') .should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // Есть крестик и он виден
     })

})

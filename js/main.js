$(document).ready(function () {
            $('#carousel-imagens').slick({
                autoplay: true,
                arrows: false
            })
        })

        $('#telefone').mask('(00) 00000-0000', {
            placeholder: '(00) 00000-0000'
        });
        $('#cep').mask('00000-000', {
            placeholder: '00000-000'
        });
        $('#cpf').mask('000.000.000-00', {
            placeholder: '000.000.000-00'
        });

        $('form').validate({
            rules: {
                nome: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true,
                    minlength: 14
                },
                cep: {
                    required: true,
                    minlength: 9
                },
                cpf: {
                    required: true,
                    minlength: 14
                }
            },
            messages: {
                nome: {
                    required: 'Por favor, informe seu nome',
                    minlength: 'Seu nome deve ter pelo menos 3 caracteres'
                },
                email: {
                    required: 'Por favor, informe seu e-mail',
                    email: 'Por favor, informe um e-mail válido'
                },
                telefone: {
                    required: 'Por favor, informe seu telefone',
                    minlength: 'Telefone inválido'
                },
                cep: {
                    required: 'Por favor, informe seu CEP',
                    minlength: 'CEP inválido'
                },
                cpf: {
                    required: 'Por favor, informe seu CPF',
                    minlength: 'CPF inválido'
                }
            },
            submitHandler: function (form) {
                alert('Formulário enviado com sucesso!');
                form.submit();
            },
            invalidHandler: function (event, validator) {
                let errors = validator.numberOfInvalids();
                if (errors) {
                    alert('Faltou Preencher ' + errors + ' campo(s) obrigatório(s).');
                }
            }
        });
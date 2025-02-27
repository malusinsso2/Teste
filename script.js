document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const local = document.getElementById('local').value;
    const descricao = document.getElementById('descricao').value;

    const body = `
        Nome: ${nome}
        Email: ${email}
        Local: ${local}
        Descrição: ${descricao}
    `;

    // Substitua 'seu-email@dominio.com' pelo seu endereço de e-mail
    const mailtoLink = `mailto:maria.oliveira@ecolab.com?subject=Relatório de Segurança&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
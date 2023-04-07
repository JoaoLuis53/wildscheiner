


export const time = () => {

    let dt = new Date();
    let ano = dt.getFullYear();
    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let dia = dias[dt.getDay()];
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let mes = meses[dt.getMonth()];
    let d = dt.getDate();

    const dateItem = dia + ' , ' + d + ' de ' + mes + ' de ' + ano + '.';
    const dateFooter = 'Copyright © wildscheine Trail Club - ' + ano + '.';

    return (
        <div>{dateItem}</div>
    );
}
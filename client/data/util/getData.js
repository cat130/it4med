// получение каталога услуг (за образец взят каталог 22 поликлиники)
// http://www.22gp.by/index.php/platnye-uslugi/150-prejskurant-platnykh-uslug-dlya-grazhdan-rb
// таблица неоднородна (где то 3 где то 5 колонок) взята только для демо


function getDataFrom22gp() {
    var t = []; $('tr').each(function (i, d) {

        var name = $($(d).find('td')[1]).text().trim();
        var type = $($(d).find('td')[2]).text().trim();
        var price = $($(d).find('td')[3]).text().trim();
        if (name)
            t.push({ mn: name, pr: price, tp: type });

    });
    console.log(JSON.stringify(t, null, 4));
}

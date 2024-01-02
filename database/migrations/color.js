exports.up = function (knex) {
    return knex.schema
        .createTable('colors', function (table) {
            table.increments('id');
            table.string('brand_name', 255);
            table.string('cat', 255);
            table.string('color_name', 255);
            table.string('rgb_r', 255);
            table.string('rgb_g', 255);
            table.string('rgb_b', 255);
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTable("colors")
};

exports.config = { transaction: false };
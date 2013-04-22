/*
 * File: app/model/Roll.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.Roll', {
    extend: 'Ext.data.Model',

    uses: [
        'MyApp.model.Window_has_Roll'
    ],

    config: {
        fields: [
            {
                name: 'Manufacturer',
                type: 'string'
            },
            {
                name: 'Type',
                type: 'string'
            },
            {
                name: 'Shade',
                type: 'int'
            },
            {
                name: 'Size',
                type: 'int'
            },
            {
                name: 'RollNumber'
            },
            {
                name: 'LinearFeet',
                type: 'int'
            },
            {
                name: 'Price',
                type: 'float'
            },
            {
                name: 'ReservedLinearFeet',
                type: 'int'
            }
        ],
        validations: [
            {
                type: 'length',
                field: 'Manufacturer',
                max: 25,
                min: 3
            },
            {
                type: 'length',
                field: 'Type',
                max: 20,
                min: 3
            },
            {
                type: 'length',
                field: 'Shade',
                max: 3,
                min: 1
            },
            {
                type: 'length',
                field: 'Size',
                max: 3,
                min: 2
            },
            {
                type: 'length',
                field: 'RollNumber',
                max: 30,
                min: 1
            },
            {
                type: 'length',
                field: 'LinearFeet',
                max: 3,
                min: 1
            }
        ],
        hasMany: {
            model: 'MyApp.model.Window_has_Roll',
            autoLoad: true,
            autoSync: true,
            foreignKey: 'Roll_id',
            name: 'whr'
        }
    }
});
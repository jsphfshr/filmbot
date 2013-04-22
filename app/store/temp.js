/*
 * File: app/store/temp.js
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

Ext.define('MyApp.store.temp', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Window'
    ],

    config: {
        model: 'MyApp.model.Window',
        storeId: 'temp',
        listeners: [
            {
                fn: 'onStoreRemoverecords',
                event: 'removerecords'
            }
        ]
    },

    onStoreRemoverecords: function(store, records, indices, eOpts) {
        Ext.getStore('Windows').remove(records);

        console.log('remove temp records event', records);
    }

});
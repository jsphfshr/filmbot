/*
 * File: app/view/Orders.js
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

Ext.define('MyApp.view.Orders', {
    extend: 'Ext.Container',
    alias: 'widget.orders',

    config: {
        id: 'orders',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'list',
                id: 'OrderList',
                itemTpl: [
                    '<div>Order {Number} was created on {Created}</div>'
                ],
                store: 'Orders',
                onItemDisclosure: true
            },
            {
                xtype: 'tabpanel',
                id: 'newOrder',
                itemId: 'newOrder',
                layout: {
                    animation: 'slide',
                    type: 'card'
                },
                tabBar: {
                    docked: 'bottom',
                    layout: {
                        pack: 'center',
                        type: 'hbox'
                    }
                },
                items: [
                    {
                        xtype: 'formpanel',
                        title: 'Add Windows',
                        iconCls: 'add',
                        id: 'AddWindowPanel',
                        items: [
                            {
                                xtype: 'fieldset',
                                id: 'WindowDemensions',
                                items: [
                                    {
                                        xtype: 'container',
                                        id: 'DimensionsPanel',
                                        layout: {
                                            align: 'center',
                                            pack: 'center',
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'numberfield',
                                                flex: 3,
                                                id: 'PanesField',
                                                width: '30px',
                                                name: 'Panes',
                                                placeHolder: 'Panes'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                flex: 3,
                                                id: 'WidthField',
                                                name: 'Width',
                                                placeHolder: 'Width'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                flex: 3,
                                                id: 'HeightField',
                                                name: 'Height',
                                                placeHolder: 'Height'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                id: 'WindowDetails',
                                defaults: {
                                    labelWidth: '30%'
                                },
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        id: 'FilmSelect',
                                        label: 'Film',
                                        listeners: [
                                            {
                                                fn: function(component, eOpts) {
                                                    var me = this;
                                                    me.element.on('tap', function(e, t){this.fireEvent('tap', this, e, t);}, me);
                                                },
                                                event: 'initialize'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'Location',
                                        label: 'Location',
                                        name: 'Location',
                                        autoCapitalize: true
                                    },
                                    {
                                        xtype: 'selectfield',
                                        id: 'Direction',
                                        label: 'Direction',
                                        name: 'Direction',
                                        options: [
                                            {
                                                text: '',
                                                value: ''
                                            },
                                            {
                                                text: 'North',
                                                value: 'North'
                                            },
                                            {
                                                text: 'South',
                                                value: 'South'
                                            },
                                            {
                                                text: 'East',
                                                value: 'East'
                                            },
                                            {
                                                text: 'West',
                                                value: 'West'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'sliderfield',
                                        id: 'Difficulty',
                                        label: 'Removal',
                                        name: 'Difficulty',
                                        maxValue: 10
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id: 'hMnfField',
                                        name: 'Manufacturer'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id: 'hTypeField',
                                        name: 'Type'
                                    },
                                    {
                                        xtype: 'hiddenfield',
                                        id: 'hShadeField',
                                        name: 'Shade'
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                id: 'enterOrder',
                                text: 'Enter'
                            }
                        ]
                    },
                    {
                        xtype: 'formpanel',
                        title: 'Customer',
                        iconCls: 'user',
                        id: 'CustomerPanel',
                        items: [
                            {
                                xtype: 'fieldset',
                                title: 'Company',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        id: 'Company',
                                        inputCls: 'hcustomer',
                                        name: 'Company',
                                        placeHolder: 'Company'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                id: 'contact',
                                title: 'Contact',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        cls: 'hddn',
                                        id: 'First',
                                        name: 'First',
                                        placeHolder: 'First'
                                    },
                                    {
                                        xtype: 'textfield',
                                        cls: 'h',
                                        id: 'Last',
                                        inputCls: 'hcustomer',
                                        name: 'Last',
                                        placeHolder: 'Last'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'Phone',
                                        inputCls: 'hcustomer',
                                        name: 'Phone',
                                        placeHolder: 'Phone'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'Email',
                                        inputCls: 'hcustomer',
                                        name: 'Email',
                                        placeHolder: 'Email'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                id: 'Address',
                                title: 'Job Address',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        id: 'Street',
                                        name: 'Street',
                                        placeHolder: 'Street'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'City',
                                        name: 'City',
                                        placeHolder: 'City'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'State',
                                        name: 'State',
                                        placeHolder: 'State'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'Zip',
                                        name: 'Zip',
                                        placeHolder: 'Zip'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        title: 'Windows',
                        iconCls: 'compose',
                        cls: 'windowlist-wrapper',
                        id: 'WindowList',
                        styleHtmlContent: true,
                        itemCls: 'windowlist-wrapper',
                        itemTpl: [
                            '<div class="tweet-wrapper">',
                            '    <img src="resources/images/noimage.jpeg" />',
                            '              <div class="tweet">',
                            '                  <h2>{Location}</h2>',
                            '                  <p>{Panes}{Width}{Height}{Type}{Shade}{Size}</p>',
                            '              </div>',
                            '           </div>'
                        ],
                        store: 'temp',
                        itemHeight: 30,
                        onItemDisclosure: true
                    },
                    {
                        xtype: 'list',
                        title: 'Totals',
                        iconCls: 'organize',
                        id: 'TotalList',
                        styleHtmlContent: true,
                        disableSelection: true,
                        itemTpl: [
                            '<div>List Item {LinearFeet}</div>'
                        ],
                        store: 'Windows_has_Rolls',
                        grouped: true,
                        itemHeight: 35
                    },
                    {
                        xtype: 'formpanel',
                        title: 'Details',
                        iconCls: 'settings',
                        items: [
                            {
                                xtype: 'textareafield',
                                name: 'Notes',
                                placeHolder: 'Notes:'
                            },
                            {
                                xtype: 'fieldset',
                                title: 'Additional Expenses',
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: {
                                            type: 'hbox'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                text: 'MyButton6'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Field'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onNewOrderActivate',
                event: 'activate',
                delegate: '#newOrder'
            }
        ]
    },

    onNewOrderActivate: function(container, newActiveItem, oldActiveItem, eOpts) {
        var tp = Ext.getCmp('newOrder');

        var btn = Ext.create('widget.actionbutton', {
            id: 'actionBttn',
            style:'position:absolute;top:auto;bottom:10px;right:10px;z-index:10;'

        });

        tp.element.insertFirst(btn.element);
    }

});
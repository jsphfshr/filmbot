/**
 * @private
 *
 * Real Clock
 */
Ext.define('Ext.cf.ds.RealClock', {
    
    /** 
     * Constructor
     *
     */
    constructor: function() {
        this.epoch = new Date('01 Jan 2011 00:00:00 GMT');
    },
    
    /** 
     * now
     *
     * @return {Number} seconds
     */
    now: function() {
        return this.ms_to_s(new Date().getTime()-this.epoch);   
    },
    
    /**
     * @private
     *
     * Milliseconds to seconds
     *
     * @param {Number} milliseconds
     *
     * @return {Number} seconds
     */
    ms_to_s: function(ms) {
        return Math.floor(ms/1000);
    }
 
});
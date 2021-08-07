describe('The buyMinutes function test' , function() {
    

    it('should return R1.85 if I buy 1 minute' , function() {
        assert.equal(1.85, buyMinutes(1));
    });

    it('should return "Please insert correct amount" if I buy 0 minute' , function() {
        assert.equal("Please insert correct amount", buyMinutes(0));
    });

    it('should return "Please insert correct amount" if no parameter is passed in' , function() {
        assert.equal("Please insert correct amount", buyMinutes());
    });

    it('should return R12.95 if I buy 7 minute' , function() {
        assert.equal(12.95, buyMinutes(7));
    });

    it('should return R20.35 if I buy 11 minute' , function() {
        assert.equal(20.35, buyMinutes(11));
    });

    it('should return R42.55 if I buy 23 minute' , function() {
        assert.equal(42.55, buyMinutes(23));
    });

    it('should return R90.65 if I buy 49 minute' , function() {
        assert.equal(90.65, buyMinutes(49));
    });

    it('should return R92.50 if I buy 50 minute' , function() {
        assert.equal(92.50, buyMinutes(50))
    });

    it('should return R68.85 if I buy 51 minute - as minutes are cheaper for 50+' , function() {
        assert.equal(68.85, buyMinutes(51));
    });

    it('should return R76.95 if I buy 57 minute' , function() {
        assert.equal(76.95, buyMinutes(57));
    });

});
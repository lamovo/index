describe('index', function () {
	
	var index = Index(2);
	
	it('first', function() {
		
		expect(index.first).toBe(0);
	});
	
	it('last', function() {
		
		expect(index.last).toBe(2);
	});
	
	it('span', function() {
		
		expect(index.span).toBe(3);
	});
	
	it('set', function() {
		
		index.set(0);
		
		expect(index.prev).toBe(0);
		expect(index.curr).toBe(0);
		expect(index.next).toBe(1);
		
		if(typeof _ === 'function') {
		
			expect(index.removed).toEqual([]);
			expect(index.added).toEqual([0, 1]);
		}
		expect(index.active).toEqual([0, 1]);
		
		expect(index.direction).toBeUndefined();
		expect(index.back[0].curr).toBe(0);
		
		index.set(1);
		
		expect(index.prev).toBe(0);
		expect(index.curr).toBe(1);
		expect(index.next).toBe(2);
		
		if(typeof _ === 'function') {
			
			expect(index.removed).toEqual([]);
			expect(index.added).toEqual([2]);
		}
		expect(index.active).toEqual([0, 1, 2]);
		
		expect(index.direction).toBe(1);
		expect(index.back[0].curr).toBe(1);
		
		index.set(2);
		
		expect(index.prev).toBe(1);
		expect(index.curr).toBe(2);
		expect(index.next).toBe(2);
		
		if(typeof _ === 'function') {
		
			expect(index.removed).toEqual([0]);
			expect(index.added).toEqual([]);
		}
		expect(index.active).toEqual([1, 2]);
		
		expect(index.direction).toBe(1);
		expect(index.back[0].curr).toBe(2);
		
		index.set(0);
		
		expect(index.direction).toBe(-1);
	});
	
	it('loop', function() {
		
		index.loop = true;
		
		index.set(0);
		
		expect(index.prev).toBe(2);
		expect(index.curr).toBe(0);
		expect(index.next).toBe(1);
		
		index.set(2);
		
		expect(index.prev).toBe(1);
		expect(index.curr).toBe(2);
		expect(index.next).toBe(0);
	});
});
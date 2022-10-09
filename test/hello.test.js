import { describe, expect, it } from 'vitest';
import { sayHello } from '../src/hello';

describe('Hello', function() {
	it('says hello', function() {
		expect(sayHello()).toBe('Hello, world!');
	});
});

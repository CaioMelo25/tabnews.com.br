import { describe, it, expect, vi } from 'vitest';
import { postValidationHandler } from '../../../../pages/api/v1/_responses/rate-limit-reached-sessions.public.js';

describe('postValidationHandler', () => {
  const next = vi.fn();

  it('CT1 - Deve lançar erro se o campo email estiver ausente', () => {
    const req = { body: { password: '123456' } };
    const res = {};
    expect(() => postValidationHandler(req, res, next)).toThrow();
  });

  it('CT2 - Deve lançar erro se o campo password estiver ausente', () => {
    const req = { body: { email: 'teste@teste.com' } };
    const res = {};
    expect(() => postValidationHandler(req, res, next)).toThrow();
  });

  it('CT3 - Deve passar se email e password estiverem presentes', () => {
    const req = { body: { email: 'teste@teste.com', password: '123456' } };
    const res = {};
    expect(() => postValidationHandler(req, res, next)).not.toThrow();
    expect(next).toHaveBeenCalled();
  });
});

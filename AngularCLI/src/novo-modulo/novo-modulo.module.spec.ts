import { NovoModuloModule } from './novo-modulo.module';

describe('NovoModuloModule', () => {
  let novoModuloModule: NovoModuloModule;

  beforeEach(() => {
    novoModuloModule = new NovoModuloModule();
  });

  it('should create an instance', () => {
    expect(novoModuloModule).toBeTruthy();
  });
});

import { BoxShadowEffectDirective } from './box-shadow-effect.directive';
import { Observable, of } from 'rxjs';

describe('BoxShadowEffectDirective', () => {
  const elem1: any = {
    get: (): Observable<any> => of({}),
  };

  const elem2: any = {
    get: (): Observable<any> => of({}),
  };

  it('should create an instance', () => {
    const directive = new BoxShadowEffectDirective(elem1, elem2);
    expect(directive).toBeTruthy();
  });
});

import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false,
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

/*   transform(value: any, args?: any): any {
    return null;
  } */

}

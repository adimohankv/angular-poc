import { Pipe, PipeTransform } from '@angular/core';

type Comparer = ((p1: any, p2: any) => number);


@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(data: any, sortOption: string) {
      if (!data || !sortOption) {
        return data;
      }

      let comparer = this.getComparer();
      if (sortOption === 'priceHTL') {
          comparer = this.getDescendigComparer(comparer);
      }
      data.sort(comparer);

      return data;
    }

  private getComparer(): Comparer {
    return function compareByCost(p1: any, p2: any): number {
      return p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0;
    };
  }

  private getDescendigComparer(comparer): Comparer {
      return (p1: any, p2: any): number => {
          return comparer(p1, p2) * -1;
      };
  }
}

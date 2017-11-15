import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ConfigurationPresenter } from 'ng2-cloud-portal-presentation-lib';

@Pipe({
    name: 'bioexcelConfiguration',
    pure: false
})
@Injectable()
export class BioExcelConfigurationPipe implements PipeTransform {
    transform(items: ConfigurationPresenter[]): ConfigurationPresenter[] {
        return items.filter(item => {
            return item.name.toLowerCase().indexOf("bioexcel".toLowerCase()) !== -1;
        });
    }
}

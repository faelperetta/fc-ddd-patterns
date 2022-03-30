import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class SendLogWhenCustomerAddressChanged implements EventHandlerInterface<CustomerAddressChangedEvent> {
    
    handle(event: CustomerAddressChangedEvent): void {
        const {id, name, address} = event.eventData;
        const {street, number, zip, city} = address;
        const fullAddress =  `${street}, ${number}, ${zip} ${city}`;
        console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${fullAddress}`);
    }
}
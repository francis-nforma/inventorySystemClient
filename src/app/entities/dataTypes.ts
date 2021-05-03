
export module inventoryData {

    export interface ICar {
        id: number;
        make: string;
        model: string;
        series: string;
        year: number;
        active: boolean;
        created_by: string;
        created_date: any;
        last_updated_date: any;
    }

    export interface IDealer {
        id: number;
        dealer_name: string;
        address_line1: string;
        address_suburb: string;
        address_state: number;
        address_postcode: boolean;
        contact_number: string;
        active: boolean;
        created_by: string;
        created_date: any;
        last_updated_date: any;
    }

    export interface ICarInventory {
        id: number;
        car_id: number;
        dealer_id: number;
        quantity: number;
        created_by: string;
        created_date: any;
        last_updated_date: any;
    }
}

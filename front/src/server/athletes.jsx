import { Server } from 'miragejs';

export const AthleteServer = new Server({
    routes() {
        this.namespace = 'api';
        this.get('/athletes', () => {
            return [
                { id: 1, firstName: 'Cristiano', lastName: 'Ronaldo', country: '🇵🇹', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 2, firstName: 'Lionel', lastName: 'Messi', country: '🇦🇷', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 3, firstName: 'Neymar', lastName: 'Jr', country: '🇧🇷', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 4, firstName: 'Kylian', lastName: 'Mbappé', country: '🇫🇷', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 5, firstName: 'Mohamed', lastName: 'Salah', country: '🇪🇬', medails: { gold: 4, silver: 10, bronze: 30 }},
            ];
        });
    }
});
import { Server } from 'miragejs';

export const makeServer = new Server({
    routes() {
        this.namespace = 'api/';
        this.get('/athletes', () => {
            return [
                { id: 1, firstName: 'Cristiano', lastName: 'Ronaldo', country: '🇵🇹', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 2, firstName: 'Lionel', lastName: 'Messi', country: '🇦🇷', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 3, firstName: 'Neymar', lastName: 'Jr', country: '🇧🇷', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 4, firstName: 'Kylian', lastName: 'Mbappé', country: '🇫🇷', medails: { gold: 4, silver: 10, bronze: 30 }},
                { id: 5, firstName: 'Mohamed', lastName: 'Salah', country: '🇪🇬', medails: { gold: 4, silver: 10, bronze: 30 }},
            ];
        });
// hello world
        this.get('/medals', () => {
            return [
                { id: 1, name: 'États-Unis', medals: { gold: 39, silver: 41, bronze: 33, totals: 113 }},
                { id: 2, name: 'Chine', medals: { gold: 38, silver: 32, bronze: 18, totals: 88 }},
                { id: 3, name: 'Russie', medals: { gold: 20, silver: 28, bronze: 23, totals: 71 }},
                { id: 4, name: 'Grande-Bretagne', medals: { gold: 22, silver: 21, bronze: 22, totals: 65 }},
                { id: 5, name: 'Japon', medals: { gold: 27, silver: 14, bronze: 17, totals: 58 }},
                { id: 6, name: 'Australie', medals: { gold: 17, silver: 7, bronze: 22, totals: 46 }},
                { id: 7, name: 'Pays-Bas', medals: { gold: 10, silver: 12, bronze: 14, totals: 36 }},
                { id: 8, name: 'France', medals: { gold: 10, silver: 12, bronze: 11, totals: 33 }},
                { id: 9, name: 'Allemagne', medals: { gold: 10, silver: 11, bronze: 16, totals: 37 }},
                { id: 10, name: 'Italie', medals: { gold: 10, silver: 10, bronze: 20, totals: 40 }},
            ];
        });
    }
});
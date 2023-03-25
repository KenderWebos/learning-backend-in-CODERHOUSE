class TicketManager {
    id = 0;
    events = [];
    #precioBaseDeGanancia = 0;

    getEvents() {
        console.log(events);
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha) {
        this.events.push({
            id: id++,
            nombre: nombre,
            lugar: lugar,
            precio: precio * 1.15 + this.#precioBaseDeGanancia,
            capacidad: capacidad ?? 50,
            fecha: fecha ?? new Date(),
            participantes: []
        })
    }

    agregarUsuario(idEvento, idUsuario) {
        // si el evento existe y el usuario no esta registrado en algun evento
        const eventoExistente = this.events.find(evento => evento.id === idEvento); // por cada uno de mis eventos, si tienen el mismo id.

        if(!eventoExistente) return console.log("El evento no existe");
        if(eventoExistente.participantes.includes(idUsuario)) return console.log("El usuario ya esta registrado en el evento");

        
    }

}

const ticketManager = new TicketManager();

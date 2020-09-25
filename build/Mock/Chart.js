"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chart = {
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    nodes: {
        node1: {
            id: "node1",
            type: "output-only",
            readonly: true,
            position: {
                x: 300,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "output",
                    properties: {
                        value: "yes"
                    }
                }
            }
        },
        node2: {
            id: "node2",
            type: "output-only",
            readonly: true,
            position: {
                x: 300,
                y: 300
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
                port2: {
                    id: "port2",
                    type: "output"
                }
            }
        },
    },
    links: {
        link1: {
            id: "link1",
            from: {
                nodeId: "node1",
                portId: "port1"
            },
            to: {
                nodeId: "node2",
                portId: "port1"
            },
        },
    },
    selected: {},
    hovered: {}
};
exports.default = chart;
//# sourceMappingURL=Chart.js.map
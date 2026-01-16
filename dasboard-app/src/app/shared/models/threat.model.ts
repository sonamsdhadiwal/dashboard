export interface Threat {
    endpoint: string;
    ip: string;
    status: boolean;
    type: 'BOT' | 'DDOS' | 'ABUSE';
    timestamp: String;
}
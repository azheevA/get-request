interface Pet {
    id: number;
    name: string;
    status: string;
    category?: {
        id: number;
        name: string;
    };
    tags?: Array<{
        id: number;
        name: string;
    }>;
    photoUrls: string[];
}

async function fetchData() {
    try {
        const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data : Pet[] = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}


fetchData();
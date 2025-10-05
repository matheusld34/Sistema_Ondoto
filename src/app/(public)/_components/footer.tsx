
export function Footer() {
    return (
        <footer className="bg-white border-t mt-auto">
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} OdontoPRO. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
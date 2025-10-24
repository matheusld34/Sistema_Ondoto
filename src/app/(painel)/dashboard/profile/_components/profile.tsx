"use client"
import { useProfileForm } from "./profile-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import imgTest from "../../../../../../public/foto1.png"


export function ProfileContent() {

    const form = useProfileForm();

    return (
        <div className="mx-auto">
            <Form {...form}>
                <form>
                    <Card>
                        <CardHeader>
                            <CardTitle>Perfil</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-center">
                                <div className="bg-gray-200 relative h-40 w-40 rounded-full overflow-hidden">
                                    <Image
                                        src={imgTest}
                                        alt="Foto de perfil"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Digite o nome da clinica..." />
                                            </FormControl>
                                        </FormItem>

                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Endereço Completo:</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Digite o endereço da clinica..." />
                                            </FormControl>
                                        </FormItem>

                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Telefone</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Digite o telefone..." />
                                            </FormControl>
                                        </FormItem>

                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Nome Completo</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value ? "active" : "inactive"}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o status da clinica" {...field} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="active">Ativo (clinica aberta)</SelectItem>
                                                        <SelectItem value="inactive">Inativo (clinica fechada)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>

                                    )}
                                />

                            </div>

                        </CardContent>
                    </Card>
                </form>

            </Form>
        </div>
    )
}
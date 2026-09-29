import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.ts";
import type * as Prisma from "./internal/prismaNamespace.ts";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumGiveawayStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GiveawayStatus | Prisma.EnumGiveawayStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGiveawayStatusFilter<$PrismaModel> | $Enums.GiveawayStatus;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumGiveawayStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GiveawayStatus | Prisma.EnumGiveawayStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGiveawayStatusWithAggregatesFilter<$PrismaModel> | $Enums.GiveawayStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGiveawayStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGiveawayStatusFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumPaymentMethodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel> | $Enums.PaymentMethodType;
};
export type EnumPaymentMethodProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodProvider | Prisma.EnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodProviderFilter<$PrismaModel> | $Enums.PaymentMethodProvider;
};
export type EnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethodType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
};
export type EnumPaymentMethodProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodProvider | Prisma.EnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethodProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodProviderFilter<$PrismaModel>;
};
export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | Prisma.EnumTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus;
};
export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | Prisma.EnumTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTicketStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTicketStatusFilter<$PrismaModel>;
};
export type EnumWinnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerStatus | Prisma.EnumWinnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWinnerStatusFilter<$PrismaModel> | $Enums.WinnerStatus;
};
export type EnumWinnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerStatus | Prisma.EnumWinnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWinnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.WinnerStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWinnerStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWinnerStatusFilter<$PrismaModel>;
};
export type EnumDrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | Prisma.EnumDrawStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDrawStatusFilter<$PrismaModel> | $Enums.DrawStatus;
};
export type EnumDrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | Prisma.EnumDrawStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrawStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDrawStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDrawStatusFilter<$PrismaModel>;
};
export type EnumPrizeClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrizeClaimStatus | Prisma.EnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrizeClaimStatusFilter<$PrismaModel> | $Enums.PrizeClaimStatus;
};
export type EnumPrizeClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrizeClaimStatus | Prisma.EnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrizeClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrizeClaimStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPrizeClaimStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPrizeClaimStatusFilter<$PrismaModel>;
};
export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType;
};
export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
};
export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction;
};
export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumGiveawayStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GiveawayStatus | Prisma.EnumGiveawayStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGiveawayStatusFilter<$PrismaModel> | $Enums.GiveawayStatus;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumGiveawayStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GiveawayStatus | Prisma.EnumGiveawayStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GiveawayStatus[] | Prisma.ListEnumGiveawayStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGiveawayStatusWithAggregatesFilter<$PrismaModel> | $Enums.GiveawayStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGiveawayStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGiveawayStatusFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
};
export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | Prisma.EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrderStatus[] | Prisma.ListEnumOrderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrderStatusFilter<$PrismaModel>;
};
export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
};
export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | Prisma.EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentStatus[] | Prisma.ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentStatusFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumPaymentMethodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel> | $Enums.PaymentMethodType;
};
export type NestedEnumPaymentMethodProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodProvider | Prisma.EnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodProviderFilter<$PrismaModel> | $Enums.PaymentMethodProvider;
};
export type NestedEnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodType | Prisma.EnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodType[] | Prisma.ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethodType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodTypeFilter<$PrismaModel>;
};
export type NestedEnumPaymentMethodProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethodProvider | Prisma.EnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethodProvider[] | Prisma.ListEnumPaymentMethodProviderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethodProvider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodProviderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodProviderFilter<$PrismaModel>;
};
export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | Prisma.EnumTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus;
};
export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | Prisma.EnumTicketStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TicketStatus[] | Prisma.ListEnumTicketStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTicketStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTicketStatusFilter<$PrismaModel>;
};
export type NestedEnumWinnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerStatus | Prisma.EnumWinnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWinnerStatusFilter<$PrismaModel> | $Enums.WinnerStatus;
};
export type NestedEnumWinnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerStatus | Prisma.EnumWinnerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WinnerStatus[] | Prisma.ListEnumWinnerStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWinnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.WinnerStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWinnerStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWinnerStatusFilter<$PrismaModel>;
};
export type NestedEnumDrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | Prisma.EnumDrawStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDrawStatusFilter<$PrismaModel> | $Enums.DrawStatus;
};
export type NestedEnumDrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | Prisma.EnumDrawStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DrawStatus[] | Prisma.ListEnumDrawStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrawStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDrawStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDrawStatusFilter<$PrismaModel>;
};
export type NestedEnumPrizeClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrizeClaimStatus | Prisma.EnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrizeClaimStatusFilter<$PrismaModel> | $Enums.PrizeClaimStatus;
};
export type NestedEnumPrizeClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrizeClaimStatus | Prisma.EnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PrizeClaimStatus[] | Prisma.ListEnumPrizeClaimStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPrizeClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrizeClaimStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPrizeClaimStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPrizeClaimStatusFilter<$PrismaModel>;
};
export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType;
};
export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeFilter<$PrismaModel>;
};
export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction;
};
export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | Prisma.EnumAuditActionFieldRefInput<$PrismaModel>;
    in?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AuditAction[] | Prisma.ListEnumAuditActionFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuditActionFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map
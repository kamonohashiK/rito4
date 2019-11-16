<template>
  <span>
    <Route />
    <ArrivalPorts />
    <ToPorts />
    <FromPorts />
  </span>
</template>

<script>
import ToPorts from "@/components/Navigation/ToPorts";
import FromPorts from "@/components/Navigation/FromPorts";
import ArrivalPorts from "@/components/Navigation/ArrivalPorts";
import Route from "@/components/Navigation/Route";

export default {
  components: {
    ToPorts,
    FromPorts,
    ArrivalPorts,
    Route
  }
};
</script>

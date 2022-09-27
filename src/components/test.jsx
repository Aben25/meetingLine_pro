// Loads Sisense.js from Server, saves Sisense App copy in window as object to indicate already loaded to prevent loading twice
const loadSisense = () => {
    // If Sisense is already loaded stop
    if (window.sisenseAppObject) {
        return;
    }
    // Loads sisense app object into app variable, edits being saved to dashboard set to false
    window.Sisense.connect(config.SisenseUrl, config.saveEdits)
        // Sisense app object
        .then((app: SisenseAppObject) => {
            // loads Sisense app object into window object, so connect is only run once, alternative is export and import
            window.sisenseAppObject = app;
            // Calls loadDashboard after Sisense is connected, uses initial widget and dashboard variables
            loadDashboard(config.DashboardConfig[0].DashboardID, config.DashboardConfig[0].DimArray);
        })
        // error catching and log in console
        .catch((e: Error) => {
            console.error(e);
        });
}
Loading Dashboard and Creating Container Element for each Widget
// Function to load dashboard taking dashboard id as parameter to load dashboard. Every widget in dashboard is rendered into an element created in loop, looks for parent element with ID 'widgets'. On calling again existing widgets are replaced by new ones.
const loadDashboard = (dashboardID: string = '') => {
        // if empty dashboard id return
        if (dashboardID === '') {
            return;
        }
        // load dashboard into being active dashboard
        window.sisenseAppObject.dashboards.load(dashboardID)
            // after load dashboard is in dash variable
            .then((dash: DashObject) => {
                window.currentDashObject = dash
                // array of loaded widgets
                // let widgetArray: Array<String> = prism.activeDashboard.widgets.toArray().map(
                let widgetArray: Array<String> = dash.$$widgets.$$widgets.map(
                    function (widget: Widget) {
                        // widget id for loading
                        return widget.id
                    }
                );
                // set state with loaded dashboard if prism loaded
                if (widgetArray.length > 0) {
                    this.setState((state, props) => {
                        return {
                            dashboardID: dash.id,
                        };
                    });
                }
                // get widgets element
                let widgetsElement: HTMLElement | null = document.getElementById(`widgets`);
                // type checking
                if (widgetsElement === null) {
                    return;
                }
                // erase previous widgets
                widgetsElement.innerHTML = '';
                // loop through array of widget arrays, loads them into containers by id with first in widget1, second in widget2 and so on
                widgetArray.forEach((widget, index) => {
                    // check if they exist, type checking 
                    if (widgetsElement === null) {
                        return;
                    }
                    // element to load widget into later
                    let widgetElement: HTMLElement | null = document.createElement("div");
                    // Class included index for widget rendering later
                    widgetElement.classList.add(`widget${index + 1}`, 'widget')
                    // add empty div to widgets parent div
                    widgetsElement.appendChild(widgetElement)
                    // get widget and filter elements by ID
                    let filterElement: HTMLElement | null = document.getElementById("filters");
                    // check if they exist, type checking 
                    if (widgetElement === null || filterElement === null) {
                        return;
                    }
                    // Clear widget and filter elements from previous render
                    filterElement.innerHTML = '';
                    // put widget in container element
                    dash.widgets.get(widget).container = widgetElement;
                    // Renders filter in HTML element with id of filters
                    dash.renderFilters(filterElement);
                    // reloads and refresh dashboard
                });
                dash.refresh();
            })
            // error catching and log in console
            .catch((e: Error) => {
                console.error(e);
            });
    }
Changing a Dashboard Filter
// Change a dashboard filter, takes dim to filter by, and new values in filter.
const changeDashboardFilter = (dashboard: dashboard, dim: string, newFilterArray: Array<String>) => {
    // Find matching filter and to make changes to
    let filterToChange = dashboard.filters.$$filters.find(item => item.jaql.dim === `[${dim}]`);
    // If filter is undefined create a new filter
    if (filterToChange === undefined) {
        // Create the filter options
        let filterOptions = {
            // Save to dashboard
            save: false,
            // Refresh on change
            refresh: true,
            // If filter already used, make changes to that filter instead of creating new ones
            unionIfSameDimensionAndSameType: true
        };
        //  Create the jaql for the filter
        let jaql = {
            'datatype': 'text',
            'dim': dim,
            'filter': {
                // Multiple items can be selected
                'multiSelection': true,
                // New filter items
                'members': newFilterArray,
                'explicit': true
            },
        };

        // Create the filter jaql object
        let applyJaql = {
            jaql: jaql
        };
        // Set the new filter using update function
        dashboard.$$model.filters.update(applyJaql, filterOptions);
    }

    if (filterToChange && filterToChange.$$model.jaql.filter) {
        let members = filterToChange.$$model.jaql.filter.members;
        // Check if members exist
        if (members !== undefined) {
            // Set members to new selected filter
            filterToChange.$$model.jaql.filter.members = newFilterArray;

            // Save the dashboard
            // dashboard.$$model.$dashboard.updateDashboard(dashboard.currentDashObject.$$model, "filters");
            dashboard.filters.update(filterToChange, { refresh: true, save: false });

            // Refresh the dashboard
            // dashboard.refresh();
        }
    }
}
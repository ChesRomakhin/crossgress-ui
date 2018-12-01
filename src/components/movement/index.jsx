import React from 'react';
import PropTypes from 'prop-types';
import {Card, Label, List, Icon} from 'semantic-ui-react';

const movement = (props) => {
    const {
        movement,
        onClick
    } = props;

    return (<Card
        color={"green"}
        onClick={onClick}
    >
        <Card.Content>
            <Card.Header>{movement.name}</Card.Header>
            <Card.Meta>
            <Label horizontal color={"green"}>{movement.type}</Label>
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            <List>
                {movement.measures.map((measure) => {
                    return (<List.Item key={measure.key}>
                        {measure.key} <Icon name={"at"} color={"green"}/> {measure.unit}
                    </List.Item>)
                })}
            </List>
        </Card.Content>
    </Card>)
};

const measureShape = PropTypes.shape({
    key: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
});

movement.PropTypes = {
    movement: PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        measures: PropTypes.arrayOf(measureShape).isRequired
    }).isRequired,
    onClick: PropTypes.func
};

export default movement;